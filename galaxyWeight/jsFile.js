function calculate() {
    let weight = document.getElementById("weight").value;

    const gravity = {
        mercury: 0.38,
        venus: 0.91,
        mars: 0.38,
        jupiter: 2.34,
        saturn: 1.06,
        uranus: 0.92,
        neptune: 1.19,
        pluto: 0.06,
        moon: 0.165,
    };

    const result1 = (weight * gravity.mercury).toFixed(2);
    document.getElementById(
        "result1"
    ).innerHTML = `weight on Mercury is ${result1} kg`;

    const result2 = (weight * gravity.venus).toFixed(2);
    document.getElementById(
        "result2"
    ).innerHTML = `weight on Venus is ${result2} kg`;

    const result3 = (weight * gravity.mars).toFixed(2);
    document.getElementById(
        "result3"
    ).innerHTML = `weight on Mars is ${result3} kg`;

    const result4 = (weight * gravity.jupiter).toFixed(2);
    document.getElementById(
        "result4"
    ).innerHTML = `weight on Jupiter is ${result4} kg`;

    const result5 = (weight * gravity.saturn).toFixed(2);
    document.getElementById(
        "result5"
    ).innerHTML = `weight on Saturn is ${result5} kg`;

    const result6 = (weight * gravity.uranus).toFixed(2);
    document.getElementById(
        "result6"
    ).innerHTML = `weight on Uranus is ${result6} kg`;

    const result7 = (weight * gravity.neptune).toFixed(2);
    document.getElementById(
        "result7"
    ).innerHTML = `weight on Neptune is ${result7} kg`;

    const result8 = (weight * gravity.pluto).toFixed(2);
    document.getElementById(
        "result8"
    ).innerHTML = `weight on Pluto is ${result8} kg`;

    const result9 = (weight * gravity.moon).toFixed(2);
    document.getElementById(
        "result9"
    ).innerHTML = `weight on Moon is ${result9} kg`;
}
