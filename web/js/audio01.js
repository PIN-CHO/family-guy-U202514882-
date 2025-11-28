function startBGM(musicfile="Family Guy - Family Guy Main Title.mp3",volume=0.3){
    const bgm = new Audio(musicfile);
    bgm.volume = volume;
    bgm.loop = true;
    bgm.play().catch((error)=>{
        console.log("BGM play was prevented.");
        const playBGMButton = ()=>{
            bgm.play();
            document.removeEventListener("click",playBGMButton);
        };
        document.addEventListener("click",playBGMButton);  
    });
    return bgm;
}