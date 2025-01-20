// stores/dataStore.ts
import { defineStore } from "pinia";
import { getData, addData } from "@/services/firestore";

export const useDataStore = defineStore("dataStore", {
    state: () => ({
        items: [] as { id: string; name: string }[], // Veriler
        loading: false, // Yüklenme durumu
        error: null as string | null, // Hata mesajı
    }),
    actions: {
        async fetchItems() {
            this.loading = true;
            this.error = null;
            try {
                const data = await getData("testCollection");
                this.items = data;
            } catch (error: any) {
                this.error = error.message || "Veri alınırken bir hata oluştu.";
            } finally {
                this.loading = false;
            }
        },
        async addItem(name: string) {
            try {
                const id = await addData("testCollection", { name });
                this.items.push({ id, name }); // Yeni veriyi state'e ekle
            } catch (error: any) {
                this.error = error.message || "Veri eklenirken bir hata oluştu.";
            }
        },
    },
});
