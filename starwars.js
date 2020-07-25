document.getElementById('button1').addEventListener('click', button1);
    
function button1(){
fetch('https://swapi.dev/api/people/')
    .then(response => response.json())
    .then(people => {
        let output = '';
        output += '<ul>';
        people.results.forEach(function(person){
            output += `<li>
                            ${person.name}
                        </li>`;

        });
        output += '</ul>';
        return document.getElementById("response").innerHTML = output;
    });
}