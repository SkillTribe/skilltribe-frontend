import { CardWithForm } from "@/components/CardWithForm";
import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/")({
    component: Index,
});

function Index() {
    return (
        <>
            <CardWithForm />
        </>
    );
}
