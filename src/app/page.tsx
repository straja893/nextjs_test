import Counter from "./components/Counter";
import styles from "./page.module.css";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className={styles.page}>
      <Counter />
    </div>
  );
}
