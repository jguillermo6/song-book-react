export default function SongItem({id, keyNote, name, author} : ItemSong){     
    return (
        <div className="relative mt-2 flex items-center gap-x-4" key={id}>
            <div className="h-10 w-10 rounded-full bg-indigo-500 flex items-center justify-center">{keyNote}</div>
            <div className="text-sm leading-6">
            <p className="font-semibold text-gray-900">
                <a href="#">
                <span className="absolute inset-0"></span>
                {name}
                </a>
            </p>
            <p className="text-gray-600">{author}</p>
            </div>
        </div>
  );

}

export type ItemSong = {id: number, keyNote: string, name: string, author: string};