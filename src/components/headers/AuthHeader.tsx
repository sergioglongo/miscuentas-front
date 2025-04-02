export function AuthHeader() {
    return (
        <header className="fixed top-0 z-10 w-full bg-transparent">
            <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-8">
                <div className="flex items-center gap-4">
                    <img
                        src="/logowallet.png"
                        alt="Mis Cuentas Logo"
                        className="h-10 w-auto"
                    />
                    <h1 className="text-xl font-bold text-gray-900">
                        Mis Cuentas
                    </h1>
                </div>
            </nav>
        </header>
    );
}
