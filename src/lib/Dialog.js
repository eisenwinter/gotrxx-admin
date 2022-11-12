import Dialog from './Dialog.svelte'

export const confirm = (p, s, f) => {
    const dialog = new Dialog({
        target: document.body,
        props: p,
        intro: true,
    });
    if (s != undefined) {
        dialog.promise.then((r) => {
            if (r) {
                s()
            } else {
                if (f != undefined) {
                    f()
                }

            }
        })

    }
    dialog.$on("destroy", () => {
        dialog.$destroy();
    });
}


export const confirmAsync = async (p) => {
    const dialog = new Dialog({
        target: document.body,
        props: p,
        intro: true,
    });
    dialog.$on("destroy", () => {
        dialog.$destroy();
    });
    const r = await dialog.promise;
    return r
}