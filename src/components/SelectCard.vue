<template>
     <div class="flex flex-center q-pt-xl">
          <q-select
            v-model="model"
            use-input
            hide-selected
            fill-input
            input-debounce="0"
            :options="options"
            @filter="filterFn"
            option-disable="cannotSelect"
            hint="Mininum 4 characters to trigger autocomplete"
            style="width: 250px; padding-bottom: 32px"
            v-on:keyup.enter="submit(model)"
          >
            <template v-slot:no-option>
              <q-item>
                <q-item-section class="text-grey">No results</q-item-section>
              </q-item>
            </template>

          </q-select>
    </div>
</template>

<script>

export default {
    props: {
        submit: {
            type: Function,
            default: () => {}
        },
        options: {
            type: Array,
            default: []
        },
        filterFn:{
            type: Function,
            default: () => {}
        }
    },
    data(){
        return{
             model: ''
        }
    },
    watch:{
        model(model)
        {
        
            this.$emit('modelo', model)
            this.submit(model)
        }
    }

}
</script>