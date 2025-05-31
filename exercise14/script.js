const addItem = async (item) => {
    await randelay();
    let div = document.createElement("div");
    div.innerHTML = item;
    document.body.append(div)
}
const randelay = () => {
    return new Promise((resolve, reject) => {
        timeout = 1 + 6 * Math.random();
        console.log(timeout)
        setTimeout(() => {
            resolve()
        }, timeout * 1000);
    })

}
async function main(){
    setInterval(() => {
        let last =document.body.lastElementChild;
    }, 600);

    let text = ["Initialising Hacking",
        "Reading your Files",
        "Password files Detected",
        "Sending all passwords and Personal Files to server",
        "Cleaning up"]
        for (const item of text) {
            await addItem(item)
        }
    }
    main()