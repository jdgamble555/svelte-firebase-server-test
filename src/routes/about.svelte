<script lang="ts">
	import { page } from '$app/stores';
	import { aboutAction } from './about-action';
	import type { ActionData } from './about/$types';

	let form: ActionData;
	$: form = $page.form;
</script>

<form method="POST" action="/about" on:submit|preventDefault={aboutAction}>
	<button type="submit" class="bg-blue-950 p-2 font-semibold text-white">
		Load About with Token
	</button>
</form>

{#if form?.data}
	<div class="my-5 flex items-center justify-center">
		<div class="flex w-[400px] flex-col gap-3 border p-5">
			<h1 class="text-3xl font-semibold">{form.data.name}</h1>
			<p>{form.data.description}</p>
		</div>
	</div>
{/if}
