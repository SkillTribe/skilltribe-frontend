import { Terminal } from "lucide-react";
import { Alert, AlertTitle } from "./ui/alert";

interface BaseContainerProps {
    children: React.ReactNode;
}

export const BaseContainer = ({ children }: BaseContainerProps) => {
    return (
        <div className="m-auto flex max-w-7xl flex-col ">
            {(import.meta.env.DEV || import.meta.env.MODE === "staging") && (
                <Alert variant={"default"} className="mt-1">
                    <Terminal className="h-4 w-4 text-slate-50" />
                    <AlertTitle>Test environment</AlertTitle>
                </Alert>
            )}
            {children}
        </div>
    );
};
