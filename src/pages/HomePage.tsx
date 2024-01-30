import { Navbar } from "@/components/Navbar";
import { BaseContainer } from "../components/BaseContainer";
import { CardWithForm } from "@/components/CardWithForm";

const HomePage = () => {
    return (
        <BaseContainer>
            <Navbar />
            <CardWithForm />
        </BaseContainer>
    );
};

export default HomePage;
