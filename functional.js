function openFeatures() {
    const allElems = document.querySelectorAll('.elem');
    const fullPages = document.querySelectorAll('.fullElem');
    const backBtns = document.querySelectorAll('.fullElem .back');

    allElems.forEach((elem, index) => {
        elem.addEventListener('click', () => {
            fullPages.forEach(p => p.style.display = 'none');
            fullPages[index].style.display = 'block';

            // SAVE OPENED PAGE
            localStorage.setItem('activePage', index);
        });
    });

    backBtns.forEach((btn, index) => {
        btn.addEventListener('click', () => {
            fullPages[index].style.display = 'none';
            localStorage.removeItem('activePage');
        });
    });

    // RESTORE AFTER RELOAD
    const saved = localStorage.getItem('activePage');
    if (saved !== null) {
        fullPages[saved].style.display = 'block';
    }
}


openFeatures()


function todoList() {

    var currentTask = []

    if (localStorage.getItem('currentTask')) {
        currentTask = JSON.parse(localStorage.getItem('currentTask'))
    } else {
        console.log('Task list is Empty');
    }



    function renderTask() {

        var allTask = document.querySelector('.allTask')

        var sum = ''

        currentTask.forEach(function (elem, idx) {
            sum = sum + `<div class="task">
        <h5>${elem.task} <span class=${elem.imp}>imp</span></h5>
        <button id=${idx}>Mark as Completed</button>
        </div>`
        })

        allTask.innerHTML = sum

        localStorage.setItem('currentTask', JSON.stringify(currentTask))

        document.querySelectorAll('.task button').forEach(function (btn) {
            btn.addEventListener('click', function () {
                currentTask.splice(btn.id, 1)
                renderTask()
            })
        })
    }
    renderTask()

    let form = document.querySelector('.addTask form')
    let taskInput = document.querySelector('.addTask form #task-input')
    let taskDetailsInput = document.querySelector('.addTask form textarea')
    let taskCheckbox = document.querySelector('.addTask form #check')

    form.addEventListener('submit', function (e) {
        e.preventDefault()
        currentTask.push(
            {
                task: taskInput.value,
                details: taskDetailsInput.value,
                imp: taskCheckbox.checked
            }
        )
        renderTask()

        taskCheckbox.checked = false
        taskInput.value = ''
        taskDetailsInput.value = ''
    })



}

todoList()


function dailyPlanner() {
    var dayPlanner = document.querySelector('.day-planner')

    var dayPlanData = JSON.parse(localStorage.getItem('dayPlanData')) || {}

    var hours = Array.from({ length: 18 }, (_, idx) => `${6 + idx}:00 - ${7 + idx}:00`)


    var wholeDaySum = ''
    hours.forEach(function (elem, idx) {

        var savedData = dayPlanData[idx] || ''

        wholeDaySum = wholeDaySum + `<div class="day-planner-time">
    <p>${elem}</p>
    <input id=${idx} type="text" placeholder="..." value=${savedData}>
</div>`
    })

    dayPlanner.innerHTML = wholeDaySum


    var dayPlannerInput = document.querySelectorAll('.day-planner input')

    dayPlannerInput.forEach(function (elem) {
        elem.addEventListener('input', function () {
            console.log('hello');
            dayPlanData[elem.id] = elem.value

            localStorage.setItem('dayPlanData', JSON.stringify(dayPlanData))
        })
    })
}

dailyPlanner()

function motivationalQuote() {
    const motivationQuoteContent = document.querySelector('.motivation-2 h1');
    const motivationAuthor = document.querySelector('.motivation-3 h2');
    

    const quotes = [
        {
            text: "Discipline will take you to places motivation never can.",
            author: "— Self Mastery"
        },
        {
            text: "Your future is decided by what you do today, not tomorrow.",
            author: "— Focus Rule"
        },
       
        {
            text: "In the most selfish way possible,  i hope nobody admires you the way i do.",
            author: "— Yash"
        },
        {
            text: "you shouldn't climb mountains for the world to see you, But for you too see the world.",
            author: "— Yash"
        },
        {
            text: "music is medicine.",
            author: "— Yash"
        },
        {
            text: "Not all strong people are kind, But all kind people are strong.",
            author: "— Yash"
        }
    ];

    const randomIndex = Math.floor(Math.random() * quotes.length);
    const selectedQuote = quotes[randomIndex];

    motivationQuoteContent.innerHTML = selectedQuote.text;
    motivationAuthor.innerHTML = selectedQuote.author;
}

motivationalQuote();


function pomodoroTimer() {


    let timer = document.querySelector('.pomo-timer h1')
    var startBtn = document.querySelector('.pomo-timer .start-timer')
    var pauseBtn = document.querySelector('.pomo-timer .pause-timer')
    var resetBtn = document.querySelector('.pomo-timer .reset-timer')
    var session = document.querySelector('.pomodoro-fullpage .session')
    var isWorkSession = true

    let totalSeconds = 25 * 60
    let timerInterval = null

    function updateTimer() {
        let minutes = Math.floor(totalSeconds / 60)
        let seconds = totalSeconds % 60

        timer.innerHTML = `${String(minutes).padStart('2', '0')}:${String(seconds).padStart('2', '0')}`
    }

    function startTimer() {
        clearInterval(timerInterval)

        if (isWorkSession) {

            timerInterval = setInterval(function () {
                if (totalSeconds > 0) {
                    totalSeconds--
                    updateTimer()
                } else {
                    isWorkSession = false
                    clearInterval(timerInterval)
                    timer.innerHTML = '05:00'
                    session.innerHTML = 'Take a Break'
                    session.style.backgroundColor = 'var(--blue)'
                    totalSeconds = 5 * 60
                }
            }, 10)
        } else {


            timerInterval = setInterval(function () {
                if (totalSeconds > 0) {
                    totalSeconds--
                    updateTimer()
                } else {
                    isWorkSession = true
                    clearInterval(timerInterval)
                    timer.innerHTML = '25:00'
                    session.innerHTML = 'Work Session'
                    session.style.backgroundColor = 'var(--green)'
                    totalSeconds = 25 * 60
                }
            }, 10)
        }

    }

    function pauseTimer() {
        clearInterval(timerInterval)
    }
    function resetTimer() {
        totalSeconds = 25 * 60
        clearInterval(timerInterval)
        updateTimer()

    }
    startBtn.addEventListener('click', startTimer)
    pauseBtn.addEventListener('click', pauseTimer)
    resetBtn.addEventListener('click', resetTimer)



}

pomodoroTimer()  


function changeTheme() {

    var theme = document.querySelector('.theme')
    var rootElement = document.documentElement

    var flag = 0
    theme.addEventListener('click', function () {

        if (flag == 0) {
            rootElement.style.setProperty('--pri', '#ffffffff')
            rootElement.style.setProperty('--sec', '#183D3D')
            rootElement.style.setProperty('--tri1', '#5C8374')
            rootElement.style.setProperty('--tri2', '#93B1A6')
            flag = 1
        } else if (flag == 1) {
            rootElement.style.setProperty('--pri', '#ffffffff')
            rootElement.style.setProperty('--sec', '#872341')
            rootElement.style.setProperty('--tri1', '#BE3144')
            rootElement.style.setProperty('--tri2', '#E17564')
            flag = 2
        } else if (flag == 2) {
            rootElement.style.setProperty('--pri', '#f7f7f7ff')
            rootElement.style.setProperty('--sec', '#512B81')
            rootElement.style.setProperty('--tri1', '#4477CE')
            rootElement.style.setProperty('--tri2', '#8CABFF')
            flag = 0
        } 

    })


}

changeTheme()


document.addEventListener("DOMContentLoaded", () => {

    const lat = 28.6139
    const lon = 77.2090

    const header1Time = document.querySelector('.header1 h1')
    const header1Date = document.querySelector('.header1 h2')
    const header2Temp = document.querySelector('.header2 h2')
    const header2Condition = document.querySelector('.header2 h4')
    const precipitation = document.querySelector('.header2 .precipitation')
    const humidity = document.querySelector('.header2 .humidity')
    const wind = document.querySelector('.header2 .wind')

    async function weatherAPICall() {
        const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,relative_humidity_2m,wind_speed_10m,weather_code`

        const response = await fetch(url)
        const data = await response.json()

        const current = data.current

        header2Temp.textContent = `${current.temperature_2m}°C`
        humidity.textContent = `Humidity: ${current.relative_humidity_2m}%`
        wind.textContent = `Wind: ${current.wind_speed_10m} km/h`
        header2Condition.textContent = getWeatherText(current.weather_code)

        const now = new Date()
        header1Time.textContent = now.toLocaleTimeString()
        header1Date.textContent = now.toDateString()
    }

    function getWeatherText(code) {
        const map = {
            0: "Clear Sky",
            1: "Mainly Clear",
            2: "Partly Cloudy",
            3: "Overcast",
            45: "Fog",
            48: "Rime Fog",
            51: "Light Drizzle",
            53: "Drizzle",
            55: "Heavy Drizzle",
            61: "Light Rain",
            63: "Rain",
            65: "Heavy Rain",
            71: "Light Snow",
            73: "Snow",
            75: "Heavy Snow",
            95: "Thunderstorm"
        }
        return map[code] || "Unknown"
    }

    weatherAPICall()
    setInterval(weatherAPICall, 600000) // auto refresh every 10 minutes
})




    function timeDate() {
        const totalDaysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

        const monthNames = [
            "January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ];
        var date = new Date()
        var dayOfWeek = totalDaysOfWeek[date.getDay()]
        var hours = date.getHours()
        var minutes = date.getMinutes()
        var seconds = date.getSeconds()
        var tarik = date.getDate()
        var month = monthNames[date.getMonth()]
        var year = date.getFullYear()

        header1Date.innerHTML = `${tarik} ${month}, ${year}`

        if (hours > 12) {
            header1Time.innerHTML = `${dayOfWeek}, ${String(hours - 12).padStart('2', '0')}:${String(minutes).padStart('2', '0')}:${String(seconds).padStart('2', '0')} PM`

        } else {
            header1Time.innerHTML = `${dayOfWeek}, ${String(hours).padStart('2', '0')}:${String(minutes).padStart('2', '0')}:${String(seconds).padStart('2', '0')} AM`
        }
    }

    setInterval(() => {
        timeDate()
    }, 1000);


weatherFunctionality()

