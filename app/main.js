document.addEventListener('DOMContentLoaded', () => {
    const hour = document.getElementById('clock-hour'),
        minutes = document.getElementById('clock-minutes'),
        seconds = document.getElementById('clock-seconds')

    const clock = () => {
        let date = new Date()

        let hh = date.getHours() * 30,
            mm = date.getMinutes() * 6,
            ss = date.getSeconds() * 6

        hour.style.transform = `rotateZ(${hh + mm / 12}deg)`
        minutes.style.transform = `rotateZ(${mm}deg)`
        seconds.style.transform = `rotateZ(${ss}deg)`
    }
    clock()
    setInterval(clock, 1000)

    const textHour = document.getElementById('text-hour'),
        textMinutes = document.getElementById('text-minutes'),
        textSeconds = document.getElementById('text-seconds'),
        dateDay = document.getElementById('date-day'),
        dateMonth = document.getElementById('date-month'),
        dateYear = document.getElementById('date-year')

    const clockText = () => {
        let date = new Date()

        let hh = date.getHours(),
            mm = date.getMinutes(),
            ampm,
            day = date.getDate(),
            month = date.getMonth(),
            year = date.getFullYear()

        if (hh >= 12) {
            hh = hh - 12
            ampm = 'PM'
        } else {
            ampm = 'AM'
        }

        if (hh == 0) {
            hh = 12
        }
        if (hh.toString().length < 2) {
            hh = '0' + hh
        }
        textHour.innerHTML = `${hh}:`

        if (mm < 10) {
            mm = '0' + mm
        }
        textMinutes.innerHTML = mm
        textSeconds.innerHTML = ampm

        dateDay.innerHTML = day
        const months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC']
        dateMonth.innerHTML = months[month]
        dateYear.innerHTML = year
    }
    clockText()

    setInterval(clockText, 1000)
    
    const darkTheme = document.querySelector('.clock__theme')
    darkTheme.addEventListener('click', function () {
              if(document.body.classList.contains('dark-theme')) {
                document.body.classList.remove('dark-theme')
                darkTheme.innerHTML = '<i class="bx bxs-moon"></i>'
                  
              } else {
                document.body.classList.add('dark-theme')
                darkTheme.innerHTML = '<i class="bx bxs-sun"></i>'
                
              }
          })
})