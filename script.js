// Separate concerns
function generateRandomData(length) {
    var randomData = [];
    for (var i = 0; i < length; i++) {
        randomData.push(Math.floor(Math.random() * 91) + 10);
    }
    return randomData;
}

// Consistent naming
var barsData = generateRandomData(30);

function createBarGraph(data) {
    var chart = document.getElementById('chart');
    chart.innerHTML = '';

    var maxValue = Math.max(...data);

    // Create a new element to fill the space above the bars
    var topFiller = document.createElement('div');
    topFiller.className = 'top-filler';
    chart.appendChild(topFiller);

    for (var i = 0; i < data.length; i++) {
        var percentage = (data[i] / maxValue) * 100;

        var bar = document.createElement('div');
        bar.className = 'bar';
        bar.style.height = percentage + '%';
        bar.textContent = data[i];

        chart.appendChild(bar);

        // Add a divider after each bar (except the last one)
        if (i < data.length - 1) {
            var divider = document.createElement('div');
            divider.className = 'divider';
            chart.appendChild(divider);
        }
    }
}

function startBubbleSort() {
    var n = barsData.length;
    var i = 0;
    var j = 0;

    function swap(i, j) {
        var temp = barsData[i];
        barsData[i] = barsData[j];
        barsData[j] = temp;
    }

    function updateGraph() {
        createBarGraph(barsData);
    }

    function animate() {
        if (i < n - 1) {
            if (j < n - i - 1) {
                if (barsData[j] > barsData[j + 1]) {
                    swap(j, j + 1);
                    updateGraph();
                }
                j++;
            } else {
                i++;
                j = 0;
            }
        } else {
            clearInterval(animationInterval);
        }
    }

    // Set interval to 50 milliseconds
    var animationInterval = setInterval(animate, 50);
}

// Initial graph creation
createBarGraph(barsData);