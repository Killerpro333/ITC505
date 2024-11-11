const storyStages = {
    start: {
        text: "You find yourself at a fork in the road in a mysterious forest. Do you go left or right?",
        choices: [
            { text: "Left", nextStage: "leftPath" },
            { text: "Right", nextStage: "rightPath" }
        ],
        image: "images/forest.jpg"
    },
    leftPath: {
        text: "You encounter a river. Do you try to swim across, look for a bridge, climb a nearby cliff, or venture deeper into the forest?",
        choices: [
            { text: "Swim across", nextStage: "swim" },
            { text: "Look for a bridge", nextStage: "bridge" },
            { text: "Climb the cliff", nextStage: "end4" },
            { text: "Venture deeper into the forest", nextStage: "end6" }
        ],
        image: "images/river.jpg"
    },
    rightPath: {
        text: "You stumble upon a sleeping dragon. Do you try to sneak past, go back, or explore a path to an enchanted lake?",
        choices: [
            { text: "Sneak past", nextStage: "dragonSneak" },
            { text: "Go back", nextStage: "start" },
            { text: "Explore the lake", nextStage: "end5" }
        ],
        image: "images/dragon.jpg"
    },
    swim: {
        text: "The current is too strong, and you struggle. Do you call for help or try to swim harder?",
        choices: [
            { text: "Call for help", nextStage: "help" },
            { text: "Swim harder", nextStage: "end1" }
        ],
        image: "images/struggle.jpg"
    },
    bridge: {
        text: "You safely cross the bridge and find treasure! Congratulations!",
        choices: [],
        image: "images/treasure.jpg"
    },
    dragonSneak: {
        text: "The dragon wakes up and roars. Do you run or try to calm it down?",
        choices: [
            { text: "Run", nextStage: "end2" },
            { text: "Calm it down", nextStage: "end3" }
        ],
        image: "images/dragon_awake.jpg"
    },
    help: {
        text: "A friendly fisherman helps you. He shows you a hidden path to the treasure. You've won!",
        choices: [],
        image: "images/fisherman.jpg"
    },
    end1: { text: "You get swept away by the river. Game Over.", choices: [], image: "images/river_swept.jpg" },
    end2: { text: "The dragon catches you. Game Over.", choices: [], image: "images/caught.jpg" },
    end3: { text: "You manage to calm the dragon, and it leads you to treasure. You've won!", choices: [], image: "images/dragon_treasure.jpg" },
    end4: { text: "You stumble upon a cliff and lose your footing. Game Over.", choices: [], image: "images/cliff.jpg" },
    end5: { text: "You find an enchanted lake that grants you eternal peace. The End.", choices: [], image: "images/lake.jpg" },
    end6: { text: "You venture deeper into the forest, but a thick fog surrounds you. You wander endlessly, never finding your way out. Game Over.", choices: [], image: "images/foggy_forest.jpg" }
};

function startGame() {
    currentStage = storyStages.start;
    updatePage();
}

function updatePage() {
    document.getElementById("story-text").innerText = currentStage.text;
    document.getElementById("story-image").src = currentStage.image;

    const choicesElement = document.getElementById("choices");
    choicesElement.innerHTML = "";

    currentStage.choices.forEach(choice => {
        const button = document.createElement("button");
        button.innerText = choice.text;
        button.onclick = () => {
            currentStage = storyStages[choice.nextStage];
            updatePage();
        };
        choicesElement.appendChild(button);
    });

    document.getElementById("reset-button").style.display = currentStage.choices.length === 0 ? "block" : "none";
}

let currentStage;
startGame();
