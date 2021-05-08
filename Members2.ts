function setData(): void {

//適当な修正
    let members: string[] = [ //ダミーデータ
        "ミズシマ", "キムタク", "フクヤマ", "モリタカ",
        "ミズシマ2", "キムタク2", "フクヤマ2", "モリタカ2",
        "ミズシマ3", "キムタク3", "フクヤマ3", "モリタカ3",
    ];



    localStorage.setItem("members", members.join(','));

}

function getData(): string[] {
    let readData;
    try {
        console.log("try");
        readData = (localStorage.getItem("members")).split(',');
    } catch {
        console.log("catch");
        readData = [];
    } finally {
        console.log("finally");
        return readData;
    }
}
