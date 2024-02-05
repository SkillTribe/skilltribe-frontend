import { Link } from "@tanstack/react-router";
import { Button } from "./ui/button";

interface LinkButtonProps {
    to: string;
    label?: string;
}
export default function LinkButton({ to, label }: LinkButtonProps) {
    return (
        <Button variant={"outline"} className="p-0">
            <Link to={to} className="h-full px-4 py-2 [&.active]:font-bold">
                {label || to}
            </Link>
        </Button>
    );
}
