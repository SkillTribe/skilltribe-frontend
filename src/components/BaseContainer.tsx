import { Alert, AlertTitle } from "./ui/alert";
import { Button } from "./ui/button";
import { useState } from "react";
import { CookieIcon, Terminal, XIcon } from "lucide-react";

interface BaseContainerProps {
    children: React.ReactNode;
}

export const BaseContainer = ({ children }: BaseContainerProps) => {
    const [isVisibleTestAlert, setVisibleTestAlert] = useState(true);
    const [isVisibleCookieAlert, setVisibleCookieAlert] = useState(true);
    return (
        <div className="m-auto flex max-w-7xl flex-col ">
            {isVisibleCookieAlert ?
                <Alert
                    variant={"default"}
                    className="mt-1 flex justify-between"
                >
                    <CookieIcon />
                    <AlertTitle>
                        By continuing to use our site, you agree to the use of
                        cookies
                    </AlertTitle>
                    <Button
                        variant={"outline"}
                        size={"none"}
                        style={{ paddingLeft: "0" }}
                        className="size-6"
                        onClick={() => setVisibleCookieAlert(false)}
                    >
                        <XIcon />
                    </Button>
                </Alert>
            :   null}
            {import.meta.env.DEV || import.meta.env.MODE === "staging" ?
                isVisibleTestAlert ?
                    <Alert
                        variant={"default"}
                        className="mt-1 flex justify-between"
                    >
                        <Terminal className="size-5 text-slate-50" />
                        <AlertTitle>Test environment</AlertTitle>
                        <Button
                            variant={"outline"}
                            size={"none"}
                            style={{ paddingLeft: "0" }}
                            className="size-6"
                            onClick={() => setVisibleTestAlert(false)}
                        >
                            <XIcon />
                        </Button>
                    </Alert>
                :   null
            :   null}
            {children}
        </div>
    );
};
