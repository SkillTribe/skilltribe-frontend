import { createFileRoute } from "@tanstack/react-router";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

export const Route = createFileRoute("/about")({
    component: About,
});

function About() {
    return (
        <Accordion
            type="single"
            collapsible
            className="mt-1 w-full rounded-md border-slate-200 bg-white px-4 py-2 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-50 "
        >
            <AccordionItem value="item-1">
                <AccordionTrigger>Is it accessible?</AccordionTrigger>
                <AccordionContent>
                    Yes. It adheres to the WAI-ARIA design pattern.
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
                <AccordionTrigger>Is it styled?</AccordionTrigger>
                <AccordionContent>
                    Yes. It comes with default styles that matches the other
                    components&apos; aesthetic.
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
                <AccordionTrigger>Is it animated?</AccordionTrigger>
                <AccordionContent>
                    Yes. It&apos;s animated by default, but you can disable it
                    if you prefer.
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    );
}
