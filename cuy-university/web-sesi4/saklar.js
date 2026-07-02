            function saklar(action, lampNumber) {

                let lamp1 = document.getElementById("lamp1");
                let lamp2 = document.getElementById("lamp2");
                let lamp3 = document.getElementById("lamp3")


                if (action == "on") {
                    if (lampNumber == 1) {
                        lamp1.src = "aset/on.gif";
                    }
                    if (lampNumber == 2) {
                        lamp2.src = "aset/on.gif";
                    }
                    if (lampNumber == 3) {
                        lamp3.src = "aset/on.gif";
                    }
                
                } if (action == "off") {
                    if (lampNumber == 1) {
                        lamp1.src = "aset/off.gif";
                    }
                    if (lampNumber == 2) {
                        lamp2.src = "aset/off.gif";
                    }
                    if (lampNumber == 3) {
                        lamp3.src = "aset/off.gif";
                    }
                return lamp1;

            }
        }