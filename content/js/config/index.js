const boot = document.getElementById('boot');
const site_name = 'ari-web';
const boot_message = {
    0: {
        "type": 'ok',
        "text": `Booting '${site_name}'...`,
        "sleep_time": 0
    }
}
const do_sleep = true;
const locations = {
    0: {
        "url": "https://github.com/TruncatedDinosour/website",
        "desc": "The source code of this website",
        "aliases": [
            "src", "source",
            "git", "github"
        ]
    },

    1: {
        "url": "/",
        "desc": "The home page",
        "aliases": [
            "home", "root",
            "index"
        ]
    },

    2: {
        "url": "/page/reset",
        "desc": "Reset your account",
        "aliases": [
            "reset", "erase",
            "del", "delete"
        ]
    },

    3: {
        "url": "/page/minimal.txt",
        "desc": "The minimal page",
        "aliases": [
            "mini", "minimal",
            "txt", "min"
        ]
    },

    4: {
        "url": "mailto:truncateddinosour@gmail.com",
        "desc": "Contact me",
        "aliases": [
            "contact", "mail",
            "email", "gmail"
        ]
    },

    5: {
        "url": "/page/blog",
        "desc": "Blog page",
        "aliases": [
            "blog", "news",
            "blogs", "articles"
        ]
    }
}
const escape_HTML = str =>
    str.replace(
        /[&<>'"]/g,
        tag =>
        ({
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            "'": '&#39;',
            '"': '&quot;'
        }[tag] || tag)
    );
