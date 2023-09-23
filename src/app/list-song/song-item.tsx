export default function SongItem({id, keyNote, name, author}: ItemSong){ 
    
    return (    
        <div>
            <div>{keyNote}</div>
            <div>{name}</div>
            <div>{author}</div>
        </div>    
    );

}

export type ItemSong = {id: number, keyNote: string, name: string, author: string};