export default function guardrail(mathFunction) {
    const queue = [];
    try {
	let result = mathFunction();
	queue.push(result);
    } catch (error) {
	queue.push(`Error: ${error}`);
    } finally {
	queue.push('Guardrail was processed');
    }

    return queue;
}
