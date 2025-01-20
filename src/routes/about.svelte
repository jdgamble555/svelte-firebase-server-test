<script lang="ts">
	import { page } from '$app/state';
	import { useFirebase } from '$lib/firebase';
	import { aboutAction } from './about-action';

	const { auth } = useFirebase();
</script>

<form method="POST" action="/about" onsubmit={(e) => aboutAction(e, auth)}>
	<button type="submit" class="bg-blue-950 p-2 font-semibold text-white">
		Load About with Token
	</button>
</form>

{#if page.form?.data}
	<div class="my-5 flex items-center justify-center">
		<div class="flex w-[400px] flex-col gap-3 border p-5">
			<h1 class="text-3xl font-semibold">{page.form.data.name}</h1>
			<p>{page.form.data.description}</p>
		</div>
	</div>
{/if}
