const ctx = document.getElementById('myChart').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'pie',
    data: {
        labels: ['Travel', 'Study', 'Shopping', 'Eat','Watch a movie'],
        datasets: [{
            label: 'Completion (%)',
            data: [42, 30, 40, 50, 60],
            backgroundColor: ['rgba(54, 162, 235, 0.5)', 'rgba(75, 192, 192, 0.5)', 'rgba(255, 206, 86, 0.5)', 'rgba(255, 99, 132, 0.5)','#ADD495'],
            borderColor: ['rgba(54, 162, 235, 1)', 'rgba(75, 192, 192, 1)', 'rgba(255, 206, 86, 1)', 'rgba(255, 99, 132, 1)', '#2E3136'],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

const ctx1 = document.getElementById('myChart1').getContext('2d');
const myChart1 = new Chart(ctx1, {
    type: 'bar',
    data: {
        labels: ['ค่าของใช้ส่วนตัว', 'ค่ากิน', 'ค่าshopping', 'ค่าอินเตอร์เน็ต', 'เงินไปเที่ยว'],
        datasets: [{
            label:'ค่าใช้จ่าย',
            data: [500, 2000, 500, 500, 1000],
            backgroundColor: [
                '#FCF3CF',
                '#F5B7B1',
                '#5499C7',
                '#FFBFC5',
                '#B5B1C8'
            ],
            borderColor: [
                '#E5F9FE',
                '#C7BBBC',
                '#FCF6BD',
                '#E8ABB5',
                '#E4D5E3'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true,
                max: 3500,
                title: {
                    display: true,
                    text: 'ราคา'
                }
            }
        },
    }
});


const ctx2 = document.getElementById('myChart2').getContext('2d');
const data = {
    labels: ['Mathematics for Computer Science', 'Data Structure and Algorithm', 'Structure Relational Database', 'Software Engineering', 'Web Technology', 'English for Science and Innovation'],
    datasets: [{
        data: [2, 5, 5, 5, 5, 4], // จำนวนชั่งโมงที่เรียนในแต่ละวิชา
        backgroundColor: ['#ffab91', '#fff59d', '#aed581', '#80cbc4', '#81d4fa','#ce93d8'],
        borderColor: ['#ffccbc', '#884EA0', '#c5e1a5', '#b2dfdb', '#BDC3C7','#e1bee7'],
        borderWidth: 1
    }]
};
const myChart2 = new Chart(ctx2, {
    type: 'doughnut',
    data: data,
    options: {
        plugins: {
            title: {
                display: true,
                text: 'จำนวนชั่วโมงที่เรียนแต่ละวิชาในปีที่ 2 ใน 1 สัปดาห์'
            }
        }
    }
});






document.addEventListener("DOMContentLoaded", function() {
    const mytitleElement = document.getElementById("mytitle");
    const nameElement = document.getElementById("name");
    const descriptionElement = document.getElementById("description");
    const introElement = document.getElementById("intro");
    
    
    const mytitle = "Portfolio";
    const name = "Supakorn anan";
    const description = "Study at Maejo University";
    const intro = "Faculty of Sceince Computer science field";
    
    mytitleElement.textContent = mytitle;
    nameElement.textContent = name;
    descriptionElement.textContent = description;
    introElement.textContent = intro;
  });