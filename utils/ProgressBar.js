import { useRouter } from "next/router";
import { useState } from "react";
import { useEffect } from "react";
import { Progress } from "@chakra-ui/react";

function ProgressBar() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const start = () => setLoading(true);
    const end = () => setLoading(false);

    router.events.on("routeChangeStart", start);
    router.events.on("routeChangeComplete", end);

    return () => {
      router.events.off("routeChangeStart", start);
    };
  }, []);

  return <div>{loading ? <Progress size="xs" isIndeterminate /> : null}</div>;
}

export default ProgressBar;
