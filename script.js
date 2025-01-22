// fetch compliments
async function fetchCompliments()
{
    try {
        const response = await fetch('./data/complimenten.json');
        console.log(response);
        if(!response.ok)
        {
            throw new Error("Ik kan de json file niet laden. Check spelling.");
        }
        const data = await response.json();
        console.log(data);
        return data.complimenten;

    } catch (error) {
        console.error("Ik kan de complimenten niet verkrijgen", error);
        return ("Je bent geweldig!", "Blijf stralen!", "code met passie!");
    } finally {
        console.log("fetchCompliments is klaar");
    };
};

//display compliments
    function displayRandomCompliment(compliments)
    {
        const complimentElement = document.getElementById('compliment');
        const randomCompliment = compliments[Math.floor(Math.random() * compliments.length)];
        complimentElement.textContent = randomCompliment;
    };

// main function IIFE (immediately invoked function expression)
(async()=>{
    const compliments = await fetchCompliments();
    const button = document.getElementById('generate-btn');
    button.addEventListener('click', () => displayRandomCompliment(compliments));
})();