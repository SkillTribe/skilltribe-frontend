interface AppContainerProps {
    children: React.ReactNode;
}

export function AppContainer({ children }: AppContainerProps) {
    return <div className="flex flex-col">{children}</div>;
}
