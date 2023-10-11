import SongItem, { ItemSong } from "./song-item";

export default function ListSong(){    

    const items: ItemSong[] = 
    [
        {id: 1, keyNote: "C", name: "Caballo homesexual de las montañas", author: "Martin Romero"},
        {id: 2, keyNote: "F#", name: "Coco Chane", author: "Eladio Carrión"},
        {id: 3, keyNote: "D", name: "Enjoy the silence", author: "Despeche mode"}
    ];    
    const listItem = items.map(p => <SongItem {...p}></SongItem>)

    return(
        <div className="mx-1 md:mx-8">            
            {listItem}
        </div>
    )
}