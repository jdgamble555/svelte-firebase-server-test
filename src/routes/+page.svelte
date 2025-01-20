<script lang="ts">
	import About from './about.svelte';
	import { useAuth, useUser } from '$lib/use-user';

	const _user = useUser();
	const user = $derived(_user.value);

	const { loginWithGoogle, logout } = useAuth();
</script>

<section class="flex flex-col gap-3 p-5 items-center">
	{#if user.data}
		<h1 class="font-semibold">Welcome {user.data.displayName}</h1>
		<button
			class="border bg-blue-600 text-white w-fit p-3 rounded-lg font-semibold"
			onclick={logout}>Logout</button
		>
		<hr />
		<About />
	{:else if user.loading}
		<p>Loading...</p>
	{:else if user.error}
		<p class="text-red-500">Error: {user.error}</p>
	{:else}
		<button class="bg-red-600 text-white font-semibold p-2" onclick={loginWithGoogle}>
			Signin with Google
		</button>
	{/if}
</section>
