<script lang="ts">
	import { loginWithGoogle, logout } from '$lib/user';
	import { useUser } from '$lib/user';
	import About from './about.svelte';

	const user = useUser();
</script>

<section class="flex flex-col gap-3 p-5 items-center">
	{#if $user}
		<h1 class="font-semibold">Welcome {$user.displayName}</h1>
		<button
			class="border bg-blue-600 text-white w-fit p-3 rounded-lg font-semibold"
			on:click={logout}>Logout</button
		>
		<hr />
		<About />
	{:else}
		<button class="bg-red-600 text-white font-semibold p-2" on:click={loginWithGoogle}>
			Signin with Google
		</button>
	{/if}
</section>
