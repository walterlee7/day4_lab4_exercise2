document.addEventListener("DOMContentLoaded", function () {
    let button = document.createElement('button');
    let btnText = document.createTextNode('Sing!');
    document.body.appendChild(button);
    button.appendChild(btnText);
    button.style.margin = "1em";

    let friends = ['AARON:', 'KAYLA:', 'AMANDA:', 'MICHAEL:', 'DAVID:'];
    let friend = ['Aaron', 'Kayla', 'Amanda', 'Michael', 'David']

    function myFunction() {
        for (let i = 0; i < friends.length; i++) {
            console.log(friends[i]);
            for (let j = 99; j > 2; j--) {
                console.log(j + " lines of code in the file, " + j + " lines of code; " + friend[i] + " strikes one out, clears it all out, " + (j - 1) + " lines of code in the file");
            }
            console.log("2 lines of code in the file, 2 lines of code; " + friend[i] + " strikes one out, clears it all out, 1 line of code in the file");
            console.log("1 line of code in the file, 2 lines of code; " + friend[i] + " strikes one out, clears it all out, no more lines of code in the file");
        }
    }


    button.addEventListener("click", function () {
        let div = document.createElement('div');
        div.className = 'friend';
        document.body.appendChild(div);

        let h3 = document.createElement('h3');
        div.appendChild(h3);

        let aaron = document.createTextNode('Aaron');
        h3.appendChild(aaron);

        let kayla = document.createTextNode('Kayla');
        h3.appendChild(kayla);

        let friends = ['AARON:', 'KAYLA:', 'AMANDA:', 'MICHAEL:', 'DAVID:'];
        let friend = ['Aaron', 'Kayla', 'Amanda', 'Michael', 'David']

        myFunction();

    });

})





