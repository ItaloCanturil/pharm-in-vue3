<template>
  <div class="max-h-[30rem] overflow-auto rounded">
    <table class="w-auto sm:w-[30rem] bg-white ">
      <thead class="bg-gray-50 border-b-2 border-gray-200">
        <tr>
          <th class="p-3 text-sm font-semibold tracking-wide text-left">Name</th>
          <th
            class="
              p-3
              text-sm
              font-semibold
              tracking-wide
              text-left
            "
          >
            Gender
          </th>
          <th class="p-3 text-sm font-semibold tracking-wide text-left">Birth</th>
          <th class="p-3 text-sm font-semibold tracking-wide text-left">
            Actions
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(user, index) in data" :key="index">
          <td class="p-1">
            <p>{{ user.name.first }}</p>
          </td>
          <td>
            {{ user.gender }}
          </td>
          <td>
            {{ formatDate(user.dob.date) }}
          </td>
          <td class="flex justify-center">
            <router-link
              class="bg-[#f25f4c] p-1 rounded-full text-white"
              :to="'/view/' + user.index_id"
            >
              <button class="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-3 w-3"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 4v16m8-8H4"
                  />
                </svg>
              </button>
            </router-link>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
defineProps({
  data: { type: Array, required: true}
})
</script>