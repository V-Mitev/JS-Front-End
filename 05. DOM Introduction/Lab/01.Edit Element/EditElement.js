function editElement(reference, match, replacer) {
    let result = reference.textContent.replace(match, replacer);

    return reference.textContent = result;
}