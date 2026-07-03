<!doctype html>
<html lang="en">
    <head>
        <title>LAMP SESION</title>

        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>
        <link href="https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css" rel="stylesheet">

        <link rel="stylesheet" href="https://unpkg.com/flowbite@1.5.1/dist/flowbite.min.css" />

    </head>

    <body>
        <div class="flex justify-center items-center min-h-screen w-full bg-gray-900 gap-10">
                <!-- lamp 1 -->
            <div class="flex flex-col gap-2 justify-center items-center">
                <img src ="aset/off.gif" alt = "" id="lamp1" />

            <label for="default-toggle1" class="inline-flex relative items-center cursor-pointer">
            <input type="checkbox" id="default-toggle1" class="sr-only peer" onchange="saklar()">
            <div class="w-16 h-6 bg-black-100 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-yellow-300 dark:peer-focus:ring-white-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-yellow-300"></div>
            </label>

            </div>


            <div class="flex flex-col gap-2 justify-center items-center">
                <!-- lamp 2 -->
                <img src ="aset/off.gif" alt = "" id="lamp2" />

            <label for="default-toggle2" class="inline-flex relative items-center cursor-pointer">
            <input type="checkbox" id="default-toggle2" class="sr-only peer" onchange="saklar()">
            <div class="w-16 h-6 bg-black-100 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-yellow-300 dark:peer-focus:ring-white-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-yellow-300"></div>
            </label>
            
            </div>

            <div class="flex flex-col gap-2 justify-center items-center">
                <!-- lamp 3 -->
                <img src ="aset/off.gif" alt = "" id="lamp3" />

            <label for="default-toggle3" class="inline-flex relative items-center cursor-pointer">
            <input type="checkbox" id="default-toggle3" class="sr-only peer" onchange="saklar()">
            <div class="w-16 h-6 bg-black-100 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-yellow-300 dark:peer-focus:ring-white-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-yellow-300"></div>
            </label>

            </div>
        </div>
        <script src="https://cdn.jsdelivr.net/npm/flowbite@4.0.1/dist/flowbite.min.js"></script>

        <script src="saklar.js" type="application/javascript"></script>
    </body>
</html>
