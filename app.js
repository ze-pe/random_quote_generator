console.log('Connected!');

const url="https://type.fit/api/quotes";

const buttomElement = document.getElementById('quote');

async function clickButton () {
    let response = await fetch(url);

    const container = document.getElementById('container');
    const author = document.getElementById('author');

    if (response.status === 200) {
         // convert json response to an object
        const jsonObject = await response.json();
        // generate random index to select a random object {text:author} within the array
        let index = Math.floor(Math.random() * jsonObject.length);
        console.log(jsonObject[index]);

        // const quoteBox = document.createElement('div').innerHTML = jsonObject[index].text;
        // container.append(quoteBox);

        const authorBox = jsonObject[index].author;
        author.innerHTML = authorBox;

        const quoteBox = jsonObject[index].text;
        container.innerHTML = quoteBox;
    }
};

buttomElement.addEventListener('click',clickButton);


// Bonus Question

const authorButton = document.getElementById('quote-me');

async function quoteMeButton () {
    let response = await fetch(url);

    const container = document.getElementById('container');
    const author = document.getElementById('author');

    if (response.status === 200) {
         // convert json response to an object
        const jsonObject = await response.json();
        const dropDown = document.getElementById('author-select');

        jsonObject.forEach(obj => {
            const option = document.createElement('option');
            option.value = obj.author;
            option.text = obj.author;
            console.log(obj.author);
            console.log(option);
            //option.innerHTML = obj.author;
            dropDown.appendChild(option);
        })

        // const quoteBox = document.createElement('div').innerHTML = jsonObject[index].text;
        // container.append(quoteBox);

        const authorBox = jsonObject[index].author;
        author.innerHTML = authorBox;

        const quoteBox = jsonObject[index].text;
        container.innerHTML = quoteBox;
    }
}

authorButton.addEventListener('click',quoteMeButton);

