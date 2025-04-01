// 헤더

export default function Header () {
    return (
        <header className="w-full h-10 bg-white fixed top-0 left-0 flex flex-row justify-between">
        <h1 className="text-xl font-bold p-2">헤더</h1>

        <section className="flex gap-2 p-2">
            <h1 className="font-bold">Menu1</h1>
            <h1 className="font-bold">Menu2</h1>
            <h1 className="font-bold">Menu3</h1>
        </section>
        </header>
    )
}