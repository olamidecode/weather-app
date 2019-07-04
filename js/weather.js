let temperature = Number(prompt("what is the temperature?"));
    if (temperature >=25) {
        alert("T-shirts, shorts, shades and some sun block.");
    } else if (temperature >=12 && temperature <=15) {
        alert("Wear a wind breaker jacket");
    } else if (temperature <=-5) {
        alert("Dress warmly and bring out your shovel cause its snowy");
    } else if (temperature <=10 && temperature >=1) {
        alert("wear a rain coat and take your umbrela"); 
    } else {
        alert("Not a valid weather temperature");
    }


