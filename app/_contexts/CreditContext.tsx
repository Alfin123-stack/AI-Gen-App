"use client";
import { useUser } from "@clerk/nextjs";
import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { updateCredit, getUserCredit } from "../_services/creditService";
import { checkUserSubscription } from "../_services/stripeService";

interface Credit {
  usedWords: number;
  maxWords: number;
}

interface DerivedCredit {
  used: number;
  max: number;
  percent: number;
  isOverLimit: boolean;
  isUnlimited: boolean;
}

interface CreditContextType {
  credit: Credit;
  derived: DerivedCredit;
  getCredit: (email: string) => Promise<void>;
  addCredit: (email: string, wordsUsed: number) => Promise<void>;
  subscribing: boolean;
}

const CreditContext = createContext<CreditContextType | undefined>(undefined);

export function CreditProvider({ children }: { children: ReactNode }) {
  const [credit, setCredit] = useState<Credit>({
    usedWords: 0,
    maxWords: 1000, // default free tier
  });
  const [subscribing, setSubscribing] = useState(false);

  const { user } = useUser();
  const emailUser = user?.emailAddresses.at(0)?.emailAddress;

  // --- Ambil credit dari server ---
  const getCredit = async (email: string) => {
    try {
      const data = await getUserCredit(email);
      if (data.ok) {
        setCredit((prev) => ({
          ...prev,
          usedWords: data?.data?.usedWords ?? 0,
          maxWords: subscribing ? Infinity : data?.data?.maxWords ?? 1000,
        }));
      }
    } catch (error) {
      console.error("Error fetching credit:", error);
    }
  };

  // --- Update credit ke server ---
  const addCredit = async (email: string, wordsUsed: number) => {
    try {
      const data = await updateCredit(email, wordsUsed);
      if (data.ok) {
        setCredit((prev) => ({
          ...prev,
          usedWords: data?.data?.usedWords ?? 0,
          maxWords: subscribing ? Infinity : data?.data?.maxWords ?? 1000,
        }));
      }
    } catch (error) {
      console.error("Error updating credit:", error);
    }
  };

  // --- Derived credit ---
  const derived: DerivedCredit = {
    used: credit.usedWords,
    max: credit.maxWords,
    percent: subscribing
      ? 0
      : Math.min((credit.usedWords / credit.maxWords) * 100, 100),
    isOverLimit: subscribing ? false : credit.usedWords >= credit.maxWords,
    isUnlimited: subscribing,
  };

  // --- Hybrid subscription: localStorage + server sync ---
  useEffect(() => {
    if (typeof window === "undefined") return;

    // 1. Ambil dari localStorage dulu (instant render)
    const localSub = localStorage.getItem("subscribing");
    if (localSub !== null) {
      setSubscribing(localSub === "true");
    }

    // 2. Lalu fetch ke server
    async function fetchData() {
      try {
        const data = await checkUserSubscription();
        const isSub = data?.ok || false;
        setSubscribing(isSub);
        localStorage.setItem("subscribing", String(isSub));
      } catch (err) {
        console.error("Error checking subscription:", err);
      }
    }
    fetchData();
  }, []);

  // Re-fetch credit setiap kali emailUser atau subscribing berubah
  useEffect(() => {
    if (emailUser) {
      getCredit(emailUser);
    }
  }, [emailUser, subscribing]);

  return (
    <CreditContext.Provider
      value={{ credit, derived, getCredit, addCredit, subscribing }}>
      {children}
    </CreditContext.Provider>
  );
}

export function useCredit() {
  const context = useContext(CreditContext);
  if (!context) {
    throw new Error("useCredit must be used within a CreditProvider");
  }
  return context;
}
