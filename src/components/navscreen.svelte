<nav>
    <p id="navscreen-logo">Adam Roberts Software Developer</p>
        <a href="/">Home</a>
        <a href="/">About</a>
        <a href="/">Contact</a>
</nav>

<style>
    /* Default styling (as visible) */
    nav {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: #FFF;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        gap: 3rem;
    }

    #navscreen-logo {
        position: absolute;
        top: 10%;
        left: 3%;
        font-size: 1.5rem;
        font-family: Inter;
        font-weight: bold;
        color: var(--h1);
    }

    a {
        font-family: 'Courier New', Courier, monospace;
        font-size: 2rem;
        text-decoration: none;
        color: var(--h2);
        border: 1px solid var(--accent-2);
        border-radius: 10%;
        padding: 1rem;
        position: relative;
        top: 5%;
    }

</style>