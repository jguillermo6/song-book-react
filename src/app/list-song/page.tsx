import SongItem, { ItemSong } from "./song-item";

export default function ListSong(){
    const items: ItemSong[] = 
    [
        {id: 1, keyNote: "C", name: "Caballo homesexual de las montañas", author: "Martin Romero"},
        {id: 2, keyNote: "F#", name: "Coco Chane", author: "Eladio Carrión"},
        {id: 3, keyNote: "D", name: "Enjoy the silence", author: "Despeche mode"}
    ];

    const listItem = items.map(p => <SongItem key={p.id} id={p.id} keyNote={p.keyNote} name={p.name} author={p.author} ></SongItem>)

    return(
        <div>
            {listItem}
        </div>
    )
}