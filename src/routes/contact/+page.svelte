<script lang='ts'>
    import { Mail } from 'lucide-svelte'
</script>

<div class="contact-title content-item">
    <h1>Contact details</h1>
</div>
<div class="contact-grid-div content-item">
    <div class="email-grid-item contact-grid-item">
        <a href="">
            <h2>LinkedIn</h2>
            <Mail size={50}/>
        </a>
    </div>
    <div class="linkedin-grid-item contact-grid-item">
        <a href="">
            <h2>Email</h2>
            <Mail size={50}/>
        </a>
    </div>
    <div class="github-grid-item contact-grid-item">
        <a href="">
            <h2>GitHub</h2>
            <Mail size={50}/>
        </a>
    </div>
    <div class="CV-grid-item contact-grid-item">
        <a href="">
            <h2>CV</h2>
            <Mail size={50}/>
        </a>
    </div>
</div>



<style>

    @media only screen and (max-width: 768px) {
        h1 {
            /* margin-top: var(--top-of-page-mobile-margin); */
            margin-top: 35%;
        }
        .content-item {
            margin-inline: var(--mobile-margin-inline);
            margin-bottom: var(--mobile-vertical-gap);
        }
        .contact-grid-div {
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-template-rows: 9rem 9rem;
            gap: var(--mobile-vertical-gap);
        }
        .contact-grid-item {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
        }
        a {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            text-decoration: none;
            width: 100%;
            height: 100%;
            color: var(--h2);
        }
    }
</style>