import { Session1Component } from "./components/session1.component";
import { Session2Component } from "./components/session2.component";
import { Session3Component } from "./components/session3.component";
import { Session4Component } from "./components/session4.component";
import { Session5Component } from "./components/session5.component";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
};

export default async function Home() {
  return (
    <>
      <Session1Component />

      <Session2Component />

      <Session3Component />

      <Session4Component />

      <Session5Component />
    </>
  );
}
