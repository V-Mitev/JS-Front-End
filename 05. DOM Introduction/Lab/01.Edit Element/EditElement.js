function editElement(reference, match, replacer) {
    let content = reference.textContent;

    let matcher = new RegExp(match, 'g');

    let result = content.replace(matcher, replacer);

    return reference.textContent = result;
}