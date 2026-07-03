            function saklar(lampNumber) {
                let toggle1 = document.getElementById("default-toggle1");
                let toggle2 = document.getElementById("default-toggle2");
                let toggle3 = document.getElementById("default-toggle3");
                let lamp1 = document.getElementById("lamp1");
                let lamp2 = document.getElementById("lamp2");
                let lamp3 = document.getElementById("lamp3")



                // toggle.checked ? alert('Lamp 1 is ON') : alert('Lamp 1 is OFF');

                if (toggle1.checked) {
                        lamp1.src = "aset/on.gif";
                    // console.log('Lamp 1 is On');
                } else {
                        lamp1.src = "aset/off.gif";
                    // console.log('Lamp 1 is Off');
                }
                if (toggle2.checked) {
                        lamp2.src = "aset/on.gif";
                    // console.log('Lamp 2 is On');
                } else {
                        lamp2.src = "aset/off.gif";
                    // console.log('Lamp 2 is Off');
                }
                if (toggle3.checked) {
                        lamp3.src = "aset/on.gif";
                    // console.log('Lamp 3 is On');
                } else {
                        lamp3.src = "aset/off.gif";
                    // console.log('Lamp 3 is Off');
                }

                // console.log('testing', toggle.checked);

            }
