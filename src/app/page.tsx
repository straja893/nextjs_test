import styles from "./page.module.css";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className={styles.page}>
      <div className="flex justify-center items-center h-screen">
        <Button variant="default">Default Button</Button>
        <Button variant="outline">Outlined Button</Button>
        <Button variant="ghost">Ghost Button</Button>
        <Button variant="link">Link Button</Button>
      </div>
    </div>
  );
}
