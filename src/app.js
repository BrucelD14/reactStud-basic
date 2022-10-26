/**
        const root = document.querySelector('#root');
        console.log(root);
        
        const element = document.createElement('h1');
        console.log(element);
        element.textContent = 'Hello from JS';
        element.className = 'heading-1';
        
        root.appendChild(element);
        **/

        const root = document.querySelector('#root');

        console.log("hello dari");

        function tick() {
            const element = (
            <div>
                <h1>Jam Sekarang</h1>
                <h2>{new Date().toLocaleTimeString()}</h2>
            </div>
        )

        ReactDOM.render(element, root);
        }
        
        tick();

        setInterval(function() {
            tick();
        }, 1000);