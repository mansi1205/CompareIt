<template>
  <b-form @submit="onSubmit">
    <b-form-group id="input-group-1" label="Name:" label-for="input-1">
      <b-input-group size="sm" class="mb-2">
        <b-input-group-prepend is-text>
          <b-icon icon="person"></b-icon>
        </b-input-group-prepend>
        <b-form-input type="text" placeholder="Company Name"></b-form-input>
      </b-input-group>
    </b-form-group>

    <b-form-group id="input-group-2" label="Website:" label-for="input-2">
      <b-input-group size="sm">
        <b-input-group-prepend is-text>
          <b-icon icon="envelope"></b-icon>
        </b-input-group-prepend>
        <b-form-input type="email" placeholder="me@example.com"></b-form-input>
      </b-input-group>
    </b-form-group>

    <b-form-group
      id="input-group-3"
      label="Number of Employees:"
      label-for="input-3"
    >
      <b-input-group size="sm" class="mb-2">
        <b-input-group-prepend is-text>
          <b-icon icon="people-fill"></b-icon>
        </b-input-group-prepend>
        <b-form-input
          type="text"
          placeholder="Number of Employees"
          size="sm"
        ></b-form-input>
      </b-input-group>
    </b-form-group>

    <b-form-group id="input-group-4" label="Industry:" label-for="input-4">
      <b-input-group size="sm" class="mb-2">
        <b-input-group-prepend is-text>
          <b-icon icon="person-fill"></b-icon>
        </b-input-group-prepend>
        <b-form-input type="text" placeholder="Industry"></b-form-input>
      </b-input-group>
    </b-form-group>

    <b-form-checkbox v-model="checked" name="check-button" switch>
      Health Insuarance
      <div v-if="checked">
        <b-form-group
          id="input-group-4"
          label="Sum insured(in ₹)"
          label-for="input-4"
        >
          <b-input-group size="sm" class="mb-2">
            <b-input-group-prepend is-text>
              <b-icon icon="cash-stack"></b-icon>
            </b-input-group-prepend>
            <b-form-input
              type="text"
              placeholder="Sum insured(in ₹)"
            ></b-form-input>
          </b-input-group>
        </b-form-group>

        <b-form-group v-slot="{ ariaDescribedby }">
          <b-form-checkbox-group
            v-model="selected"
            :options="options"
            :aria-describedby="ariaDescribedby"
            switches
            stacked
          ></b-form-checkbox-group>
        </b-form-group>
      </div>
    </b-form-checkbox>

    <b-form-group v-slot="{ ariaDescribedby }">
      <b-form-checkbox-group
        v-model="select"
        :options="opt"
        :aria-describedby="ariaDescribedby"
        switches
        stacked
      ></b-form-checkbox-group>
    </b-form-group>
    <b-form-group
      id="input-group-4"
      label="Number of paid leaves:"
      label-for="input-4"
    >
      <b-input-group size="sm" class="mb-2">
        <b-input-group-prepend is-text>
          <b-icon icon="cash-stack"></b-icon>
        </b-input-group-prepend>
        <b-form-input
          type="text"
          placeholder="Number of paid leaves"
        ></b-form-input>
      </b-input-group>
    </b-form-group>

    <b-button type="submit" variant="primary">Next</b-button>
  </b-form>
</template>


<script>
export default {
  name: "CompanyForm",
  data() {
    return {
      checked: false,
      selected: [], // Must be an array reference!
      options: [
        { text: "Family Covered", value: "Family Covered" },
        { text: "Parents Covered", value: "Parents Covered" },
        { text: "Maternity Covered", value: "Maternity Covered" },
      ],
      select: [], // Must be an array reference!
      opt: [
        { text: "Gym membership", value: "Gym membership" },
        { text: "Free doctor-on-call", value: "Free doctor-on-call" },
        { text: "Flexible work timings", value: "Flexible work timings" },
        { text: "Remote-work friendly ", value: "Remote-work friendly" },
      ],
    };
  },
  methods: {
    onSubmit(event) {
      event.preventDefault();
      alert(JSON.stringify(this.form));
    },
  },
};
</script>