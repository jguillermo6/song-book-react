
export default function NavButton({children, title, action} : {children: React.ReactNode, title: string, action: Function}){
    return (
        <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center"
            title={title} onClick={() => action() }>
            {children}
        </button>
    );
}